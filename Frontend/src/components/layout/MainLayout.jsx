import EmptyState from "../chat/chat-Input/EmptyState";
function MainLayout() {
    return (
        <>
            <main className="flex-1 overflow-y-auto min-h-0 px-6 py-10 flex justify-center bg-zinc-900">
                <EmptyState />
            </main>
        </>
    );
}
export default MainLayout;