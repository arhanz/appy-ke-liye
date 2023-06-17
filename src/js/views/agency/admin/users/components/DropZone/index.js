// import React from "react";
// import { useState } from "react";
// import { DropzoneDialog } from "material-ui-dropzone";
// import Button from "@material-ui/core/Button";
// import propTypes from "prop-types";

// export default function DropZone({ setDP }) {
//   const [open, setOpen] = useState(false);

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleSave = (files) => {
//     let reader = new FileReader();
//     reader.onloadend = function () {
//       // console.log('RESULT', reader.result)
//       setDP(reader.result);
//       setOpen(false);
//     };
//     reader.readAsDataURL(files[0]);
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };
//   return (
//     <>
//       <DropzoneDialog
//         open={open}
//         onSave={handleSave}
//         acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
//         showPreviews={true}
//         filesLimit={1}
//         maxFileSize={5000000}
//         onClose={handleClose}
//         submitButtonText="Upload"
//       />
//       <Button variant="outlined" className="mb-2" onClick={handleOpen}>
//         Click Here to Upload Image
//       </Button>
//     </>
//   );
// }

import React, {
    useState,
    useEffect
} from "react";
import {
    DropzoneDialog
} from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import propTypes from "prop-types";

export default function DropZone({
    setDP
}) {
    const [open, setOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = (files) => {
        let reader = new FileReader();
        reader.onloadend = function() {
            if (isMounted) {
                setDP(reader.result);
                setOpen(false);
            }
        };
        reader.readAsDataURL(files[0]);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return ( <
        >
        <
        DropzoneDialog open = {
            open
        }
        onSave = {
            handleSave
        }
        acceptedFiles = {
            ["image/jpeg", "image/png", "image/bmp"]
        }
        showPreviews = {
            true
        }
        filesLimit = {
            1
        }
        maxFileSize = {
            5000000
        }
        onClose = {
            handleClose
        }
        submitButtonText = "Upload" /
        >
        <
        Button variant = "outlined"
        className = "mb-2"
        onClick = {
            handleOpen
        } >
        Click Here to Upload Image <
        /Button> <
        />
    );
}