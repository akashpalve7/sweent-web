import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold text-lg">Sweent</h3>
        </div>

        <div>
          <h4 className="font-semibold">Quick links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Subscribe</h4>
          <p className="text-sm mt-2">Get updates about new articles.</p>
          <form className="mt-3 flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 rounded-md border w-full"
            />
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-slate-600 flex justify-between">
          <div>© {new Date().getFullYear()} Sweent. All rights reserved.</div>
          <div>Built with ❤️</div>
        </div>
      </div>
    </footer>
  );
}
