interface props {
    text: string
}

export default function Title({text}: props) {
    return (
        <a className="hero-subtitle-gradient hover:hero-subtitle-hover relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full cursor-pointer">
              <img src="/images/icon-title.svg" alt="icon" />
              <span className="hero-subtitle-text">
                {text}
              </span>
            </a>
    )
}