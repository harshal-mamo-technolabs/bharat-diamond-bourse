'use client';

import { useEffect, useRef, useState } from 'react';
import localFont from 'next/font/local';
import { Sora } from 'next/font/google';

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });
const gotham = localFont({ src: '../../../public/fonts/Gotham.otf', weight: '400', style: 'normal' });

function Arrow({ color = '#FFFFFF', size = 16, stroke = 2, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 12h14" stroke={color} strokeWidth={stroke} strokeLinecap="round" />
      <path d="M14 7l5 5-5 5" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function StartBusinessModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1: details, 2: OTP, 3: thank you
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const closeTimerRef = useRef(null);
  const otpRefs = useRef([]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && step === 2) {
      setTimeout(() => otpRefs.current[0]?.focus(), 0);
    }
  }, [isOpen, step]);

  if (!isOpen) return null;

  const goToOtp = () => {
    const emailOk = /.+@.+\..+/.test(email.trim());
    const phoneOk = /^\+?\d{7,15}$/.test(phone.trim());
    if (!emailOk) return setError('Please enter a valid email.');
    if (!phoneOk) return setError('Please enter a valid phone number.');
    setError('');
    setStep(2);
  };

  const submitOtp = () => {
    const complete = otp.every((d) => d && /\d/.test(d));
    if (!complete) return setError('Please enter the 6-digit OTP.');
    setError('');
    setStep(3);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      onClose?.();
      setStep(1);
      setEmail('');
      setPhone('');
      setOtp(['', '', '', '', '', '']);
    }, 2000);
  };

  const updateOtp = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const next = [...otp];
    next[index] = value.slice(-1);
    setOtp(next);
    if (value && index < otpRefs.current.length - 1) otpRefs.current[index + 1]?.focus();
  };
  const onOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      e.preventDefault();
      const next = [...otp];
      next[index - 1] = '';
      setOtp(next);
      otpRefs.current[index - 1]?.focus();
    }
  };
  const onOtpPaste = (e, startIndex = 0) => {
    const text = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!text) return;
    e.preventDefault();
    const next = [...otp];
    for (let i = 0; i < text.length && startIndex + i < next.length; i++) next[startIndex + i] = text[i];
    setOtp(next);
    const focusIndex = Math.min(startIndex + text.length, otpRefs.current.length) - 1;
    if (focusIndex >= 0) otpRefs.current[focusIndex]?.focus();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center">
      <button aria-label="Close" className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className={`relative mx-4 w-full max-w-md rounded-[14px] bg-white p-6 shadow-xl ${sora.className}`}>
        <button onClick={onClose} className="absolute right-3 top-3 text-[#0E234E]/70 hover:text-[#0E234E]" aria-label="Close">✕</button>
        <h3 className={`${gotham.className} text-[#0E234E] text-[20px] font-semibold mb-1`}>Start Your Business</h3>
        {step < 3 && (
          <p className="text-[13px] text-[#0E1425]/70 mb-4">Step {step} of 2</p>
        )}

        {step === 1 && (
          <div>
            <label className="block text-[13px] text-[#0E1425]/80 mb-1">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-[10px] border border-[#E1E6EF] px-3 py-2 text-[14px] outline-none focus:ring-2 focus:ring-[#0E234E]/30" placeholder="you@example.com" />
            <label className="block mt-3 text-[13px] text-[#0E1425]/80 mb-1">Phone number</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-[10px] border border-[#E1E6EF] px-3 py-2 text-[14px] outline-none focus:ring-2 focus:ring-[#0E234E]/30" placeholder="+91 98765 43210" />
            {error && <p className="mt-3 text-[12px] text-red-600">{error}</p>}
            <div className="mt-5 flex justify-end">
              <button onClick={goToOtp} className={`group inline-flex items-center gap-2 rounded-[10px] px-5 py-2.5 bg-[#0E234E] text-white ${gotham.className} text-[13px] font-[600] tracking-[0.5px] hover:-translate-y-px transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E234E]/40`}>
                Continue
                <Arrow color="#FFFFFF" size={16} stroke={2} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="text-[13px] text-[#0E1425]/80 mb-3">Enter the 6-digit OTP sent to your email/phone.</p>
            <div className="flex items-center justify-between gap-2">
              {otp.map((d, i) => (
                <input
                  key={i}
                  ref={(el) => (otpRefs.current[i] = el)}
                  inputMode="numeric"
                  maxLength={1}
                  value={d}
                  onChange={(e) => updateOtp(i, e.target.value)}
                  onKeyDown={(e) => onOtpKeyDown(i, e)}
                  onPaste={(e) => onOtpPaste(e, i)}
                  className="w-10 h-11 text-center rounded-[10px] border border-[#E1E6EF] text-[16px] outline-none focus:ring-2 focus:ring-[#0E234E]/30"
                />
              ))}
            </div>
            {error && <p className="mt-3 text-[12px] text-red-600">{error}</p>}
            <div className="mt-5 flex justify-between">
              <button onClick={() => setStep(1)} className="rounded-[10px] px-4 py-2 text-[13px] text-[#0E234E] border border-[#0E234E]/30 hover:bg-[#0E234E]/5">Back</button>
              <button onClick={submitOtp} className={`group inline-flex items-center gap-2 rounded-[10px] px-5 py-2.5 bg-[#0E234E] text-white ${gotham.className} text-[13px] font-[600] tracking-[0.5px] hover:-translate-y-px transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E234E]/40`}>
                Submit
                <Arrow color="#FFFFFF" size={16} stroke={2} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="py-6 text-center">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="mx-auto mb-3 text-[#0E234E]">
              <path d="M20 7L9 18l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h4 className={`${gotham.className} text-[#0E234E] text-[18px] font-semibold`}>Thank you!</h4>
            <p className="mt-1 text-[13px] text-[#0E1425]/70">Your details have been submitted.</p>
          </div>
        )}
      </div>
    </div>
  );
}


