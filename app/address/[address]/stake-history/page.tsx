import StakeHistoryPageClient from './page-client';

type Props = Readonly<{
    params: {
        address: string;
    };
}>;

export const metadata = {
    description: `Stake history for each epoch on Xandeum`,
    title: `Stake History | Xandeum`,
};

export default function StakeHistoryPage(props: Props) {
    return <StakeHistoryPageClient {...props} />;
}
