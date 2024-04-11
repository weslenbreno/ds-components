import { AvatarFallback, AvatarImage, AvatarRoot } from "./Avatar.styles";
import { AvatarFallbackProps, AvatarImageProps, AvatarRootProps } from "./Avatar.types";

const Root = ({ children }: AvatarRootProps) => <AvatarRoot>{children}</AvatarRoot>;
const Image = ({ alt, src }: AvatarImageProps) => <AvatarImage src={src} alt={alt} />;
const Fallback = ({ children, delayMs }: AvatarFallbackProps) => <AvatarFallback delayMs={delayMs}>{children}</AvatarFallback>;

export const Avatar = { Root, Image, Fallback };
