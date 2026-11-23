"use client";

import { useRef, useState } from "react";
import { InteractiveFolderGallery } from "@/components/ui/interactive-folder-gallery";
import { ebooks, type Ebook } from "@/data/ebooks";

export function WorkHero() {
  const reader = useRef<HTMLDialogElement>(null);
  const [book, setBook] = useState<Ebook>();
  const [page, setPage] = useState(0);

  function openBook(id: string | number) {
    const selected = ebooks.find((entry) => entry.id === id);
    if (!selected?.pages.length) return;
    setBook(selected);
    setPage(0);
    reader.current?.showModal();
  }

  return (
    <section id="selected-designs" className="border-y border-white/10 bg-[#08080A] text-[#F2F0EB]">
      <h2 className="border-b border-white/10 py-5 text-center font-display text-[clamp(2.75rem,10vw,10rem)] font-black uppercase leading-none tracking-tight">
        Ebook Guides
      </h2>
      <div className="container-custom">
        <InteractiveFolderGallery
          photos={ebooks.map((entry) => ({ id: entry.id, image: entry.cover, alt: entry.title }))}
          folderName="Ebook Collection"
          dragHintText="Select an ebook to preview · Drag a cover down to close"
          emptyMessage="Ebook guides are coming soon."
          onPhotoSelect={openBook}
          className="py-8 lg:py-12"
        />
      </div>
      <dialog ref={reader} aria-label={book?.title ?? "Ebook preview"} className="m-auto max-h-[90dvh] w-[min(94vw,52rem)] overflow-y-auto rounded-xl bg-zinc-950 p-4 text-white backdrop:bg-black/80 sm:p-6">
        <header className="mb-4 flex items-center justify-between gap-4">
          <h3 className="font-semibold">{book?.title}</h3>
          <form method="dialog"><button className="rounded-lg border border-white/20 px-4 py-2">Close</button></form>
        </header>
        {book && (
          <>
            <img src={book.pages[page]} alt={`${book.title}, page ${page + 1}`} draggable={false} className="mx-auto max-h-[65dvh] max-w-full object-contain" />
            <nav aria-label="Ebook pages" className="mt-4 flex items-center justify-between gap-2 text-sm">
              <button type="button" disabled={page === 0} onClick={() => setPage(page - 1)} className="rounded-lg border border-white/20 px-3 py-2 disabled:opacity-40">Previous</button>
              <span aria-live="polite">{page + 1} / {book.pages.length}</span>
              <button type="button" disabled={page === book.pages.length - 1} onClick={() => setPage(page + 1)} className="rounded-lg border border-white/20 px-3 py-2 disabled:opacity-40">Next</button>
            </nav>
          </>
        )}
      </dialog>
    </section>
  );
}

export default WorkHero;
