import React, { useState, useEffect } from 'react';
import download from 'downloadjs';
import axios from 'axios';
import { API_URL } from './utils/constantsSubAdmin';
import Nav from '../nav/Nav';

const AdminSubList = () => {
   const [filesList, setFilesList] = useState([]);
   const [errorMsg, setErrorMsg] = useState('');

   useEffect(() => {
      const getFilesList = async () => {
         try {
            const { data } = await axios.get(`${API_URL}/getAllFiles`);
            setErrorMsg('');
            setFilesList(data);
         } catch (error) {
            error.response && setErrorMsg(error.response.data);
         }
      };

      getFilesList();
   }, []);

   const downloadFile = async (id, path, mimetype) => {
      try {
         const result = await axios.get(`${API_URL}/download/${id}`, {
            responseType: 'blob',
         });
         const split = path.split('/');
         const filename = split[split.length - 1];
         setErrorMsg('');
         return download(result.data, filename, mimetype);
      } catch (error) {
         if (error.response && error.response.status === 400) {
            setErrorMsg('Error while downloading file. Try again later');
         }
      }
   };

   //delete
   function deleteMarking(_id) {
      axios
         .delete(`${API_URL}/delete/${_id}`)
         .then((res) => {
            //console.log(res.data);
            window.location = `/AdminSubList`;
         })
         .catch((err) => {
            alert(err);
         });
   }

   return (
      <div className="files-container">
         <Nav/>
         <br />
         <br />
         <br />
         <h1>Submissions</h1>
         {errorMsg && <p className="errorMsg">{errorMsg}</p>}
         <table className="files-table table-striped">
            <thead>
               <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Download</th>
                  <th>Submission</th>
               </tr>
            </thead>
            <tbody>
               {filesList.length > 0 ? (
                  filesList.map(({ _id, title, description,deadline, file_path, file_mimetype }) => (
                     <tr key={_id}>
                        <td className="file-title">{title}</td>
                        <td className="file-description">{description}</td>
                        
                        <td>
                           <a href="#/" onClick={() => downloadFile(_id, file_path, file_mimetype)}>
                              Download
                           </a>

                        </td>
                        <td>

                        <Link to={"/submissions"}  variant="primary" type="submit" class="btn btn-outline-primary btn-lg">
                         Submission
                        </Link> 
                        </td>
                     </tr>
                  ))
               ) : (
                  <tr>
                     <td colSpan={3} style={{ fontWeight: '300' }}>
                        No files found. Please add some.
                     </td>
                  </tr>
               )}
            </tbody>
         </table>
      </div>
   );
};

export default AdminSubList;