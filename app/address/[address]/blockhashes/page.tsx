import RecentBlockhashesPageClient from './page-client';

type Props = Readonly<{
    params: {
        address: string;
    };
}>;

export const metadata = {
    description: `Recent blockhashes on Xandeum`,
    title: `Recent Blockhashes | Xandeum`,
};

export default function RecentBlockhashesPage(props: Props) {
    return <RecentBlockhashesPageClient {...props} />;
}
