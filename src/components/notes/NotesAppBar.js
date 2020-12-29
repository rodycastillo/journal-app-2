import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector( state => state.notes );

    const handleSave = () => {
        dispatch( startSaveNote( active ) );
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if ( file ) {
            dispatch( startUploading( file ) );
        }
    }

    return (
        <div className="notes__appbar">
            <span>29 de Diciembre 2020</span>

            <input 
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: 'none' }}
                onChange={ handleFileChange }
            />

            <div>
                <button 
                    className="btn btn-info"
                    onClick={ handlePictureClick }
                >
                    Picture
                </button>

                <button 
                    className="btn btn-info"
                    onClick={ handleSave }
                >
                     Save
                </button>
            </div>
        </div>
    )
}
