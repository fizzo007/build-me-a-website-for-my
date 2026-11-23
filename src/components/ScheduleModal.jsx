import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ScheduleModal({ isOpen, onClose, isDark }) {
  const [scheduled, setScheduled] = useState(false);
  const [meetingType, setMeetingType] = useState('founder-pitch');
  const [selectedDate, setSelectedDate] = useState('tomorrow');
  const [selectedTime, setSelectedTime] = useState('14:00 GMT');
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');

  if (!isOpen) return null;

  const meetingTypes = [
    { id: 'founder-pitch', label: '30-Min Founder Pitch & Syndicate Discovery', duration: '30 min' },
    { id: 'advisory', label: 'Strategic Scale & M&A Consultation', duration: '45 min' },
    { id: 'co-investor', label: 'Institutional Co-Investment & Syndicate Relations', duration: '45 min' },
  ];

  const timeSlots = [
    '10:00 GMT', '11:30 GMT', '14:00 GMT', '15:30 GMT', '17:00 GMT'
  ];

  const handleConfirm = (e) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 60,
        spread: 50,
        origin: { y: 0.6 }
      });
    } catch (err) {}
    setScheduled(true);
  };

  const handleClose = () => {
    setScheduled(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className={`w-full max-w-xl rounded-3xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl transition-all ${
          isDark 
            ? 'bg-slate-900 border-slate-700 text-white' 
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        <button
          onClick={handleClose}
          className={`absolute top-6 right-6 p-2 rounded-full border transition-colors ${
            isDark 
              ? 'border-slate-700 hover:bg-slate-800 text-slate-400 hover:text-white' 
              : 'border-slate-200 hover:bg-slate-100 text-slate-500 hover:text-slate-900'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {scheduled ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold">Session Confirmed!</h3>
            <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Calendar invitation & secure meeting link have been dispatched to <strong>{attendeeEmail || 'your email'}</strong>.
            </p>
            <div className={`p-4 rounded-xl border max-w-xs mx-auto text-xs ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <div>Slot: <strong>{selectedTime}</strong></div>
              <div className="text-slate-400 mt-0.5">Syfag Ventures Partner Desk</div>
            </div>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <PhoneCall className="w-4 h-4" /> Direct Calendar Access
            </div>
            <h2 className="text-2xl font-extrabold mb-1">
              Schedule Strategic Briefing
            </h2>
            <p className={`text-xs sm:text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Book a direct video conference with Syfag Ventures partners.
            </p>

            <form onSubmit={handleConfirm} className="space-y-5">
              {/* Meeting Type Selection */}
              <div>
                <label className={`block text-xs font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Select Focus Area
                </label>
                <div className="space-y-2">
                  {meetingTypes.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setMeetingType(m.id)}
                      className={`w-full p-3 rounded-xl text-left text-xs border flex items-center justify-between transition-all ${
                        meetingType === m.id
                          ? 'border-cyan-400 bg-cyan-500/15 text-cyan-300 font-semibold ring-1 ring-cyan-400'
                          : isDark ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <span>{m.label}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">{m.duration}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <label className={`block text-xs font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Available Time Slots
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2 px-1 text-center rounded-xl text-xs font-medium border transition-all ${
                        selectedTime === slot
                          ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold'
                          : isDark ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Liam Sterling"
                    value={attendeeName}
                    onChange={(e) => setAttendeeName(e.target.value)}
                    className={`w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm border outline-none focus:ring-2 focus:ring-cyan-500 ${
                      isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. liam@partner.com"
                    value={attendeeEmail}
                    onChange={(e) => setAttendeeEmail(e.target.value)}
                    className={`w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm border outline-none focus:ring-2 focus:ring-cyan-500 ${
                      isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-500 text-white font-bold text-sm shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Lock In Strategic Meeting</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
