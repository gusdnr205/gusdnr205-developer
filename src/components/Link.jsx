// 예제 코드
import React from 'react'

const ExternalLink = ({ link }) => {
    return (
        <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
            {/* 외부 링크를 표시할 iframe */}
            <iframe
                title="External Link"
                src={link}
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    border: '0',
                }}
                allowFullScreen
            />
        </div>
    )
}

export default ExternalLink
