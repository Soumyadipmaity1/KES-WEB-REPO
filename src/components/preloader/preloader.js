import React, { useState, useEffect } from 'react';

function PreLoader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 30000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="items-center z-50 flex bg-[#15191f] h-screen justify-center">
            {loading ? (
                <img src="https://ai-hmi.com/wp-content/plugins/preloader-sws/assets/img/bg-true/hexagons-in-round.gif" alt='Loading...' />
            ) : null}
        </div>
    );
}

export default PreLoader;
