import { Metadata } from 'next/types';
import React from 'react';

type Props = Readonly<{
    children: React.ReactNode;
    params: Readonly<{
        signature: string;
    }>;
}>;

export async function generateMetadata({ params: { signature } }: Props): Promise<Metadata> {
    if (signature) {
        return {
            description: `Interactively inspect the Xandeum transaction with signature ${signature}`,
            title: `Transaction Inspector | ${signature} | Xandeum`,
        };
    } else {
        return {
            description: `Interactively inspect Xandeum transactions`,
            title: `Transaction Inspector | Xandeum`,
        };
    }
}

export default function TransactionInspectorLayout({ children }: Props) {
    return children;
}
