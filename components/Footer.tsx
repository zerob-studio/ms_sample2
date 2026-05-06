export default function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Big mark */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8">
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-md bg-accent/15 ring-1 ring-accent/30">
                <span className="relative font-en font-bold text-accent text-sm">
                  M
                </span>
              </span>
              <span className="font-en font-semibold text-ink tracking-tight text-lg">
                musai<span className="text-muted">.studio</span>
              </span>
            </a>
            <p className="text-sm text-muted max-w-md leading-relaxed">
              Sound · Localization · Entertainment.
              <br />
              Trusted by AAA studios &amp; publishers since 1995.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <span className="font-en text-2xl text-ink tracking-tight">
              <span className="gradient-text">Boost</span> Your Play.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="text-xs uppercase tracking-wider text-muted mb-3">
              Studio
            </div>
            <ul className="space-y-2 text-sm text-ink/80">
              <li className="hover:text-accent cursor-pointer transition-colors">About</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Services</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Works</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Careers</li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-muted mb-3">
              Service
            </div>
            <ul className="space-y-2 text-sm text-ink/80">
              <li className="hover:text-accent cursor-pointer transition-colors">SOUND</li>
              <li className="hover:text-accent cursor-pointer transition-colors">L10N</li>
              <li className="hover:text-accent cursor-pointer transition-colors">ECHO</li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-muted mb-3">
              Studios
            </div>
            <ul className="space-y-2 text-sm text-ink/80">
              <li>Seoul, Korea</li>
              <li>Berlin, Germany</li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-muted mb-3">
              Connect
            </div>
            <ul className="space-y-2 text-sm text-ink/80">
              <li className="hover:text-accent cursor-pointer transition-colors">contact@musaistudio.com</li>
              <li>+82 2 529 1488</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Instagram</li>
              <li className="hover:text-accent cursor-pointer transition-colors">LinkedIn</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-xs text-muted">
          <span>© 2026 MUSAI Studio. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <span className="hover:text-ink cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-ink cursor-pointer transition-colors">Terms</span>
            <span>Crafted in Seoul</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
