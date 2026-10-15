import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight,
  ArrowLeft,
  RotateCcw,
  Send,
  Sparkles,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import {
  SadKitty,
  SadCinnamoroll,
  SadMyMelody,
  CryingKittyFinal
} from './components/SanrioCharacters';
import { MusicBox } from './components/AudioPlayer';
import { FloatingDecorations } from './components/FloatingDecorations';

// Screen indices:
// 0: Pantalla de inicio ("Perdón" con corazón roto)
// 1: Ilustración triste 1 + mensaje 1
// 2: Ilustración triste 2 + mensaje 2
// 3: Ilustración triste 3 + mensaje 3
// 4: Última pantalla ("Te amo, ¿podemos empezar de nuevo?" + Ilustración llorando)

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<number>(0);
  const [customMessage, setCustomMessage] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [showPhoneInput, setShowPhoneInput] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const totalScreens = 5;

  const nextScreen = () => {
    if (currentScreen < totalScreens - 1) {
      setCurrentScreen((prev) => prev + 1);
    }
  };

  const prevScreen = () => {
    if (currentScreen > 0) {
      setCurrentScreen((prev) => prev - 1);
    }
  };

  const handleSendWhatsApp = () => {
    const textToSend = customMessage.trim() || 'Hola, leí todo lo que escribiste en la página...';
    const encoded = encodeURIComponent(textToSend);

    const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');

    const url = cleanPhone
      ? `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encoded}`
      : `https://api.whatsapp.com/send?text=${encoded}`;

    window.open(url, '_blank');
  };

  const handleCopyMessage = () => {
    const text = customMessage.trim() || 'Hola, leí todo lo que escribiste en la página...';
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-gradient-to-br from-pink-100 via-sky-50 to-pink-100 text-slate-700 select-none">
      {/* Decorative ambient elements (pastel stars & soft clouds, no red hearts) */}
      <FloatingDecorations />

      {/* Music player button in top corner */}
      <MusicBox />

      {/* Top Header / Progress Indicator */}
      <header className="relative z-10 w-full max-w-4xl mx-auto px-4 pt-4 sm:pt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {currentScreen > 0 ? (
            <button
              onClick={prevScreen}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 hover:bg-white text-slate-600 hover:text-pink-600 shadow-sm border border-pink-200 text-xs sm:text-sm font-semibold transition-all active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Atrás</span>
            </button>
          ) : (
            <div className="flex items-center gap-1.5 text-slate-500 font-medium text-xs sm:text-sm">
              <span className="text-pink-400">✦</span>
              <span>Para Alexandra</span>
            </div>
          )}
        </div>

        {/* Progress dots */}
        <div className="flex items-center gap-2 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-pink-200 shadow-sm">
          {[0, 1, 2, 3, 4].map((step) => (
            <button
              key={step}
              onClick={() => setCurrentScreen(step)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentScreen === step
                  ? 'w-6 bg-gradient-to-r from-pink-400 to-sky-400 shadow-xs'
                  : 'w-2 bg-slate-200 hover:bg-pink-200'
              }`}
              title={`Ir a sección ${step + 1}`}
            />
          ))}
        </div>
      </header>

      {/* Main Screen Content with Transitions */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6 my-auto">
        <div className="w-full max-w-3xl">
          <AnimatePresence mode="wait">
            {/* SCREEN 0: INICIO "PERDÓN" CON CORAZÓN ROTO */}
            {currentScreen === 0 && (
              <motion.div
                key="screen-0"
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -12 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="w-full bg-white/85 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-lg border border-pink-200/80 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-300 via-sky-300 to-pink-300" />

                <div className="my-2">
                  {/* Corazón roto en lugar de la paloma */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                    className="inline-flex p-3 rounded-full bg-gradient-to-tr from-pink-50 to-sky-50 border border-pink-200 mb-3 shadow-xs"
                  >
                    <span className="text-3xl select-none">💔</span>
                  </motion.div>

                  <h1 className="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-slate-700 to-sky-600 bg-clip-text text-transparent mb-3 font-['Comfortaa',sans-serif]">
                    Perdón
                  </h1>

                  <p className="text-slate-600 font-medium text-sm sm:text-base max-w-md mx-auto mb-6">
                    Hice esto para hablarte con total sinceridad. Por favor lee con calma cada parte.
                  </p>

                  {/* Character preview row (NO names printed anywhere) */}
                  <div className="py-2 flex items-center justify-center gap-2 sm:gap-6 opacity-95 scale-90 sm:scale-100">
                    <div className="w-20 h-20 sm:w-24 sm:h-24">
                      <SadKitty className="w-full h-full" />
                    </div>
                    <div className="w-20 h-20 sm:w-24 sm:h-24">
                      <SadCinnamoroll className="w-full h-full" />
                    </div>
                    <div className="w-20 h-20 sm:w-24 sm:h-24">
                      <SadMyMelody className="w-full h-full" />
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 italic mt-3 mb-8">
                    Presiona el botón para continuar
                  </p>

                  <div className="flex justify-center">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={nextScreen}
                      className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-400 via-rose-300 to-sky-400 text-white font-bold text-base sm:text-lg shadow-md hover:shadow-pink-300/40 transition-all cursor-pointer"
                    >
                      <span>Seguir</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SCREEN 1: PRIMER APARTADO */}
            {currentScreen === 1 && (
              <motion.div
                key="screen-1"
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -35 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full bg-white/85 backdrop-blur-xl rounded-3xl p-6 sm:p-9 shadow-lg border border-pink-200/80 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-400 to-rose-300" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Character Illustration (NO name label) */}
                  <div className="md:col-span-5 flex flex-col items-center justify-center">
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                      className="w-48 h-48 sm:w-60 sm:h-60"
                    >
                      <SadKitty className="w-full h-full" />
                    </motion.div>
                  </div>

                  {/* Exact text requested */}
                  <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-pink-50 text-pink-700 border border-pink-100 w-fit">
                      <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                      <span>Mensaje sincero</span>
                    </div>

                    <div className="bg-pink-50/50 border border-pink-100/90 rounded-2xl p-5 sm:p-6 shadow-xs">
                      <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                        &ldquo;Alexandra te pido perdón de verdad por haber sido una persona demasiado obsesiva contigo, ya se q es culpa de los dos que nuestra relación esté así, pero más mía por haberme puesto demasiado inseguro en todo, se que debo darte tiempo pero realmente te extraño mucho y me gustaría intentar arreglar las cosas lo más pronto posible &rdquo;
                      </p>
                    </div>

                    {/* Button: Seguir */}
                    <div className="pt-2 flex justify-end">
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={nextScreen}
                        className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-pink-300/40 transition-all cursor-pointer"
                      >
                        <span>Seguir</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SCREEN 2: SEGUNDO APARTADO */}
            {currentScreen === 2 && (
              <motion.div
                key="screen-2"
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -35 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full bg-white/85 backdrop-blur-xl rounded-3xl p-6 sm:p-9 shadow-lg border border-sky-200/80 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 to-blue-400" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Character Illustration (NO name label) */}
                  <div className="md:col-span-5 flex flex-col items-center justify-center order-1 md:order-1">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut' }}
                      className="w-52 h-52 sm:w-64 sm:h-64"
                    >
                      <SadCinnamoroll className="w-full h-full" />
                    </motion.div>
                  </div>

                  {/* Exact text requested */}
                  <div className="md:col-span-7 flex flex-col justify-between space-y-4 order-2 md:order-2">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100 w-fit">
                      <span className="text-sky-500">✦</span>
                      <span>Desde el corazón</span>
                    </div>

                    <div className="bg-sky-50/50 border border-sky-100/90 rounded-2xl p-5 sm:p-6 shadow-xs">
                      <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                        &ldquo;Te extraño, por favor hablemos pronto. Extraño demasiado tu forma cariñosa con la que nos enamoramos, la manera en la que me hacías sentir seguro y querido en cada momento, eres todo para mí y realmente no quisiera q terminemos porque eres la persona que realmente amo y deseo tener en mi vida siempre.&rdquo;
                      </p>
                    </div>

                    {/* Corner Button as requested: "Abajo en la esquina otro botón de seguir" */}
                    <div className="pt-2 flex justify-end">
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={nextScreen}
                        className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-sky-400 to-blue-400 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-sky-300/40 transition-all cursor-pointer"
                      >
                        <span>Seguir</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SCREEN 3: TERCER APARTADO */}
            {currentScreen === 3 && (
              <motion.div
                key="screen-3"
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -35 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full bg-white/85 backdrop-blur-xl rounded-3xl p-6 sm:p-9 shadow-lg border border-pink-300/80 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-400 via-rose-300 to-sky-300" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Character Illustration (NO name label) */}
                  <div className="md:col-span-5 flex flex-col items-center justify-center">
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ repeat: Infinity, duration: 3.6, ease: 'easeInOut' }}
                      className="w-48 h-48 sm:w-60 sm:h-60"
                    >
                      <SadMyMelody className="w-full h-full" />
                    </motion.div>
                  </div>

                  {/* Exact text requested */}
                  <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-pink-50 text-pink-700 border border-pink-100 w-fit">
                      <span className="text-pink-400">✦</span>
                      <span>Reconociendo mis errores</span>
                    </div>

                    <div className="bg-pink-50/50 border border-pink-100/90 rounded-2xl p-5 sm:p-6 shadow-xs">
                      <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                        &ldquo;perdón por ser tan inseguro contigo, se que nunca me harías nada malo como ponerme cacho pero esque con lo rara y distante que has estado ultimamente, me hace pensar cosas que no deberian ser. Perdón por no haberte podido defender en ese momento que pudo haber marcado la diferencia en la relación que era cuando tenías mi ig a tus manos y viste mensajes q no debían que afectaron nuestra relación y realmente quiero arreglar todo y recuperar tu confianza tu amor.&rdquo;
                      </p>
                    </div>

                    {/* Corner Button as requested: "En la esquina otro botón de siguiente" */}
                    <div className="pt-2 flex justify-end">
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={nextScreen}
                        className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-pink-300/40 transition-all cursor-pointer"
                      >
                        <span>Siguiente</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SCREEN 4: ÚLTIMA PANTALLA ("Te amo, ¿podemos empezar de nuevo?" + Kitty llorando) */}
            {currentScreen === 4 && (
              <motion.div
                key="screen-4"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="w-full bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-9 shadow-xl border border-pink-200/90 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-400 via-sky-400 to-rose-300" />

                {/* Question title requested */}
                <motion.div
                  initial={{ y: -8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="text-2xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-pink-600 via-slate-700 to-sky-600 bg-clip-text text-transparent mb-2 font-['Comfortaa',sans-serif]">
                    Te amo, ¿podemos empezar de nuevo?
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mb-2">
                    Sé que las cosas han estado tensas, pero me importa mucho arreglar esto contigo.
                  </p>
                </motion.div>

                {/* Character crying (NO name label) */}
                <div className="flex justify-center my-1">
                  <motion.div
                    animate={{ scale: [1, 1.015, 1] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                    className="w-48 h-48 sm:w-64 sm:h-64"
                  >
                    <CryingKittyFinal className="w-full h-full" />
                  </motion.div>
                </div>

                {/* Free custom response area only (no preset options) */}
                <div className="max-w-xl mx-auto mt-4 text-left space-y-4">
                  <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5">
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 mb-2">
                      <MessageCircle className="w-4 h-4 text-pink-500" />
                      <span>Escribe tu respuesta para enviármela a WhatsApp:</span>
                    </div>

                    <div className="space-y-3">
                      <textarea
                        value={customMessage}
                        onChange={(e) => setCustomMessage(e.target.value)}
                        placeholder="Escribe aquí lo que quieras responderme con total sinceridad..."
                        rows={4}
                        className="w-full p-3.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 bg-white text-slate-700 resize-none shadow-xs"
                      />

                      {/* Optional phone number input toggle if needed */}
                      <div className="flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setShowPhoneInput(!showPhoneInput)}
                          className="text-[11px] text-slate-500 hover:text-sky-600 underline cursor-pointer"
                        >
                          {showPhoneInput ? 'Ocultar número de destino' : '¿Quieres enviarlo a un número en específico?'}
                        </button>
                      </div>

                      {showPhoneInput && (
                        <div className="p-2.5 rounded-xl bg-white border border-sky-100 flex items-center gap-2">
                          <span className="text-xs text-slate-500 shrink-0">Número:</span>
                          <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Ej. +51 999 999 999"
                            className="w-full text-xs p-1 focus:outline-none border-b border-slate-200"
                          />
                        </div>
                      )}

                      {/* Action buttons */}
                      <div className="flex flex-col sm:flex-row gap-2 pt-1">
                        <button
                          type="button"
                          onClick={handleSendWhatsApp}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all cursor-pointer active:scale-98"
                        >
                          <Send className="w-4 h-4" />
                          <span>Enviar respuesta a WhatsApp</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleCopyMessage}
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-all cursor-pointer"
                        >
                          {isCopied ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-700">Copiado</span>
                            </>
                          ) : (
                            <span>Copiar texto</span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Return to start */}
                  <div className="flex justify-center pt-1">
                    <button
                      onClick={() => setCurrentScreen(0)}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Volver a leer desde el inicio</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer watermark */}
      <footer className="relative z-10 w-full py-4 text-center text-xs text-slate-400/80 font-medium">
        Hecho con sinceridad y respeto para ti ✦
      </footer>
    </main>
  );
}
