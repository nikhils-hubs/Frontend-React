function ChatInput() {
    return (
        <footer className="w-full px-6 py-4 bg-zinc-900">
            <form className="mx-auto w-full max-w-4xl">
                <textarea
                    placeholder="Ask me anything..."
                    className="w-full resize-none rounded-3xl border border-zinc-700 bg-zinc-800 px-5 py-4 text-white 
                    text-base outline-none" />
            </form>
        </footer>
    )
}

export default ChatInput