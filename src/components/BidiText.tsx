"use client";

import { Fragment } from "react";

/** Keeps Latin terms (React.js, JavaScript, CSS) intact inside RTL text. */
export default function BidiText({ text }: { text: string }) {
    const parts = text.split(
        /([A-Za-z0-9][A-Za-z0-9+#./_-]*(?:[ \t]+[A-Za-z0-9][A-Za-z0-9+#./_-]*)*)/g,
    );

    return (
        <>
            {parts.map((part, i) =>
                /^[A-Za-z0-9]/.test(part) ? (
                    <bdi key={i} dir="ltr">
                        {part}
                    </bdi>
                ) : (
                    <Fragment key={i}>{part}</Fragment>
                ),
            )}
        </>
    );
}
