export function NoteCard() {
    return (
        <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
            <span className="text-sm font-medium text-slate-300">
                há 6 dias
            </span>
            <p className="text-sm leading-6 text-slate-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis iste dolorem repellat obcaecati, quos deleniti id
                aspernatur. Voluptatum rerum illo, architecto delectus repellat
                ipsa perferendis ut cupiditate illum repellendus consequatur?
                Voluptatem dicta eos maxime accusamus cum eveniet excepturi
                beatae sapiente voluptatibus aliquam nulla velit, deserunt,
                corrupti magnam alias, odit possimus totam eum doloribus.
                Accusantium obcaecati eveniet nemo odio. Pariatur, eos!
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
        </button>
    );
}
