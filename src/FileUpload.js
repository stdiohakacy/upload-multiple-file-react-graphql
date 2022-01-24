import React from "react";
import { useMutation, gql } from "@apollo/client";

const UPLOAD_FILE = gql`
    mutation uploadWriterFile($file: [Upload]!, $writerId: String!) {
        uploadWriterFile(file: $file, writerId: $writerId) {
            success
        }
    }
`;

const FileUpload = () => {
    const [uploadWriterFile] = useMutation(UPLOAD_FILE, {
        onCompleted: (data) => console.log(data),
    });
    const handleFileChange = (e) => {
        const file = e.target.files;
        if (!file) return;
        uploadWriterFile({ variables: { file, writerId: "c0a19f0d-6d89-4209-a9e7-1886328d4fde" } });
    };
    return (
        <>
            <input
            type="file"
            name="GraphQLUploadForMedium"
            onChange={handleFileChange}
            multiple
            />
        </>
    );
};

export default FileUpload;