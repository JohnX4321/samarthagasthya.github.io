import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [state, handleSubmit] = useForm('xwvyjnqg');

  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            Have a project or question? I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-accent-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          {state.succeeded ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-900 rounded-3xl p-12 text-center neomorph-card"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Thank you for your message!
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I've received your email and will get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 neomorph-card space-y-6"
            >
              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  <Mail className="inline-block w-5 h-5 mr-2 text-blue-600" />
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors"
                />
                <ValidationError field="email" errors={state.errors} />
              </motion.div>

              {/* Title Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  placeholder="What is this about?"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors"
                />
                <ValidationError field="subject" errors={state.errors} />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me more about your project or inquiry..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors resize-none"
                />
                <ValidationError field="message" errors={state.errors} />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={state.submitting}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-accent-600 hover:from-blue-700 hover:to-accent-700 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {state.submitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {/* Form Error */}
              <ValidationError errors={state.errors} />
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
