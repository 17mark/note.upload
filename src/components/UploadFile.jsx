
const UploadFile = ({file, handleFile, selectedFile, setSelectedFile, ref}) => {
	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		handleFile({added: true, filename: event.target.files[0].name});
	};

	const handleSubmission = () => {
    console.log("send file to server");
	};

	return(
   <div>
			<input type="file" name="file" onChange={changeHandler} ref={ref}/>
			{file.added ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			{/* <div>
				<button onClick={handleSubmission}>Submit</button>
			</div> */}
		</div>
	)
}


export default UploadFile;
