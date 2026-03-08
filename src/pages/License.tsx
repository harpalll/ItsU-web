import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Scale } from "lucide-react";

export default function License() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Scale size={28} className="text-primary" />
            <span className="text-xs font-black uppercase tracking-widest text-primary">Legal</span>
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tight mb-2">
            <span className="gradient-text">License</span>
          </h1>
          <p className="text-sm text-text-muted">MIT License</p>
        </motion.div>

        <div className="glass-card rounded-2xl p-8">
          <pre className="text-sm text-text-secondary leading-relaxed whitespace-pre-wrap font-mono">
            {`MIT License

Copyright (c) ${new Date().getFullYear()} ItsU

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
          </pre>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 glass-card rounded-2xl p-6"
        >
          <h2 className="text-lg font-black text-white uppercase mb-3">Open Source</h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            ItsU is an open-source project. The frontend code, backend server, and shared types
            are all available under the MIT License. You are free to fork,
            modify, and deploy your own instance. See the{" "}
            <a
              href="https://github.com/HarmishTervadiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover underline"
            >
              GitHub repository
            </a>{" "}
            for the full source code and contribution guidelines.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
