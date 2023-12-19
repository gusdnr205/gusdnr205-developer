// NewModal.js
import React from 'react'

const NewModal = ({ show, onClose, project }) => {
    if (!show) {
        return null
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                {/* 여기에 프로젝트 상세 정보를 표시하는 내용 추가 */}
                {project && (
                    <>
                        <h2>{project.name}</h2>
                        {/* 다른 프로젝트 정보 표시 */}
                    </>
                )}
            </div>
        </div>
    )
}

export default NewModal
