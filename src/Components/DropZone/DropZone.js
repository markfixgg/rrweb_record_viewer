import {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import "./DropZone.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({setEvents}) {
    const onDrop = useCallback(acceptedFiles => {
        const reader = new FileReader()

        reader.onload = async (e) => {
            let text = (e.target.result);
            let events = JSON.parse(text.toString());

            setEvents(events);
        };

        reader.readAsText(acceptedFiles[0])
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


    return (
        <div className={"wrapper"} {...getRootProps()}>
            <div className={"dropzone"}>
                <input {...getInputProps()} />
                <div style={{marginTop: '50px'}}>
                    {
                        isDragActive ?
                            <h2>Drop the files here ...</h2> :
                            <h2>Drop file with events here (that contains json string)</h2>
                    }
                </div>
            </div>
        </div>
    )
}
