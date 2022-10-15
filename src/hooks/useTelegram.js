export function useTelegram() {
    const tg = window.Telegram.WebApp

    const onClose = () => tg.close()
    const onToggleButton = () => tg.MainButton.isVisible ? tg.MainButton.hide() : tg.MainButton.show()

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
    }
}