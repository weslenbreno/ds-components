import type { Meta, StoryObj } from '@storybook/react';
import { Avatar as AvatarComponent } from './Avatar';
import { AvatarFallbackProps, AvatarImageProps, AvatarRootProps } from './Avatar.types';

type AvatarProps = {
    src: string;
    alt: string;
    delayMs: number;
}

const Avatar = ({ alt, delayMs, src }: AvatarProps) => (
    <AvatarComponent.Root>
        <AvatarComponent.Image src={src} alt={alt} />
        <AvatarComponent.Fallback delayMs={delayMs}>JD</AvatarComponent.Fallback>
    </AvatarComponent.Root>
)

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    argTypes: {
        children: {
            description: 'The children of the Avatar Root.',
            control: {
                type: false,
            },
        },
        src: {
            description: 'The source of the image.',
            control: {
                type: 'text',
            },
        },
        alt: {
            description: 'The alt text of the image.',
            control: {
                type: 'text',
            },
        },
        delayMs: {
            description: 'The delay in milliseconds for the fallback to appear.',
            control: {
                type: 'number',
            },
        },    
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const AvatarWrapper: StoryObj<typeof Avatar> = {
    name: 'Avatar',
    args: {
        src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
        alt: 'Avatar',
        delayMs: 1000,
    },
    render: (args: AvatarProps) => <Avatar {...args} />,
};

export const Root: StoryObj<typeof AvatarComponent.Root> = {
    args: {
        children: 'JD',
    },
    render: ({ children }: AvatarRootProps) => <AvatarComponent.Root>{children}</AvatarComponent.Root>,
};

export const Image: StoryObj<typeof AvatarComponent.Image> = {
    args: {
        src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
        alt: 'Avatar',
    },
    render: ({ alt, src }: AvatarImageProps) => (
        <AvatarComponent.Root>
            <AvatarComponent.Image src={src} alt={alt} />,
        </AvatarComponent.Root>
    )
};

export const Fallback: StoryObj<typeof AvatarComponent.Fallback> = {
    args: {
        delayMs: 1000,
        children: 'FB',
    },
    render: function Render({ children, delayMs }: AvatarFallbackProps) {
        return (
            <AvatarComponent.Root>
                <AvatarComponent.Fallback delayMs={delayMs}>{children}</AvatarComponent.Fallback>
            </AvatarComponent.Root>
        )
    }
};