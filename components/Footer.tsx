export default function Footer() {
  return (
    <footer className="section-divider py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Wordmark hero — big and confident */}
        <div className="mb-16 lg:mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h3 className="font-en font-medium text-6xl lg:text-8xl text-ink tracking-tightest leading-none">
              musai<span className="text-muted/60">studio</span>
            </h3>
            <span className="font-serif-display italic text-xl text-muted">
              Boost Your Play.
            </span>
          </div>
          <p className="mt-8 text-sm text-muted max-w-md leading-relaxed">
            Sound · Localization · Entertainment.
            <br />
            Trusted by AAA studios &amp; publishers since 1995.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pt-10 border-t border-border">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-subtle mb-4">
              Studio
            </div>
            <ul className="space-y-2.5 text-sm text-ink/85">
              <li className="hover:text-accent cursor-pointer transition-colors">About</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Services</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Works</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Careers</li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-subtle mb-4">
              Service
            </div>
            <ul className="space-y-2.5 text-sm text-ink/85">
              <li className="hover:text-accent cursor-pointer transition-colors">SOUND</li>
              <li className="hover:text-accent cursor-pointer transition-colors">L10N</li>
              <li className="hover:text-accent cursor-pointer transition-colors">ECHO</li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-subtle mb-4">
              Studios
            </div>
            <ul className="space-y-2.5 text-sm text-ink/85">
              <li>Seoul, Korea</li>
              <li>Berlin, Germany</li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-subtle mb-4">
              Connect
            </div>
            <ul className="space-y-2.5 text-sm text-ink/85">
              <li className="hover:text-accent cursor-pointer transition-colors font-en">
                contact@musaistudio.com
              </li>
              <li className="font-en tabular-nums">+82 2 529 1488</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Instagram</li>
              <li className="hover:text-accent cursor-pointer transition-colors">LinkedIn</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-xs text-muted">
          <span>© 2026 MUSAI Studio. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <span className="hover:text-ink cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-ink cursor-pointer transition-colors">Terms</span>
            <span>Crafted in Seoul</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
