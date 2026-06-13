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
    <section id="contact" className="min-h-screen py-20 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight text-neutral-900 dark:text-neutral-50">
            Get In Touch
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 mb-4 text-sm max-w-lg mx-auto">
            Have a project or question? Fill out the form below and I'll get back to you as soon as possible.
          </p>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl mx-auto"
        >
          {state.succeeded ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="neomorph-card rounded-2xl p-12 text-center"
            >
              <CheckCircle className="w-12 h-12 text-neutral-600 dark:text-neutral-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                Thank you for your message!
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                I've received your email and will get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="neomorph-card rounded-2xl p-8 md:p-10 space-y-5"
            >
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  <Mail className="inline-block w-4 h-4 mr-1.5 text-neutral-500" />
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 focus:border-neutral-400 dark:focus:border-neutral-500 focus:outline-none transition-colors text-sm"
                />
                <ValidationError field="email" errors={state.errors} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  placeholder="What is this about?"
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 focus:border-neutral-400 dark:focus:border-neutral-500 focus:outline-none transition-colors text-sm"
                />
                <ValidationError field="subject" errors={state.errors} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me more about your project or inquiry..."
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 focus:border-neutral-400 dark:focus:border-neutral-500 focus:outline-none transition-colors resize-none text-sm"
                />
                <ValidationError field="message" errors={state.errors} />
              </motion.div>

              <motion.button
                type="submit"
                disabled={state.submitting}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2.5 px-6 btn-primary rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {state.submitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              <ValidationError errors={state.errors} />
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
