import React, { useEffect, useRef, useState } from 'react';
import { Box, Frame } from './Playground.styled';

const baseUrl = '/playground.html';

export const Playground = () => {

    const [url, setUrl] = useState('');
    const ref = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        window.onmessage = ({ data }) => {
            data = JSON.parse(data);
            setUrl(data.pathname.replace(baseUrl, '') + data.hash)
        }
    }, []);

    return (
        <Box>
            <Frame ref={ref} src={baseUrl} sandbox="allow-same-origin allow-scripts" />
        </Box>
    );
}