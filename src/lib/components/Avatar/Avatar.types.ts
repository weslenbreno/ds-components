export type AvatarRootProps = {
    children: React.ReactNode;
}

export type AvatarImageProps = {
    src: string;
    alt: string;
}

export type AvatarFallbackProps = {
    delayMs: number;
    children: React.ReactNode;
}