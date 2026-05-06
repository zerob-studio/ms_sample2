export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-accent/15 ring-1 ring-accent/30">
                <span className="relative font-en font-bold text-accent text-sm">M</span>
              </span>
              <span className="font-en font-semibold text-ink tracking-tight">
                musai<span className="text-muted">.studio</span>
              </span>
            </a>
            <p className="text-sm text-muted max-w-sm leading-relaxed">
              Sound · Localization · Entertainment.
              <br />
              30년의 경험, 가장 정직한 협업 방식.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-muted mb-3">
              Studio
            </div>
            <ul className="space-y-2 text-sm text-ink/80">
              <li className="hover:text-accent cursor-pointer transition-colors">About</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Services</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Works</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Careers</li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-muted mb-3">
              Connect
            </div>
            <ul className="space-y-2 text-sm text-ink/80">
              <li className="hover:text-accent cursor-pointer transition-colors">Instagram</li>
              <li className="hover:text-accent cursor-pointer transition-colors">YouTube</li>
              <li className="hover:text-accent cursor-pointer transition-colors">LinkedIn</li>
              <li className="hover:text-accent cursor-pointer transition-colors">hello@musai.studio</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-xs text-muted">
          <span>© 2026 MUSAI Studio. All rights reserved.</span>
          <span>Crafted in Seoul</span>
        </div>
      </div>
    </footer>
  );
}
