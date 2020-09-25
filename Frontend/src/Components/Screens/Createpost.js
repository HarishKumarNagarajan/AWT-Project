import React,{useState} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parser from 'react-html-parser'
function Createpost() {
  const [blog,setblog]=useState("");
    return (
        <div>
            <br></br>
        <div className="row " style={{ margin: "0" }}>
            <div className="col-12 col-xl-5 container">
            <CKEditor
                    editor={ ClassicEditor }
                    data={blog}
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log(data);
                        setblog(data);
                    } }
                />
                
                </div>
                
            <div className="col-12 col-xl-5 container" style={{position:"relative",border:"4px solid black"}}>
                <h1>Blog</h1>
                  <p style={{textAlign:"left"}}>{parser(blog)}</p>
            </div>
        </div>
        </div>
    )
}

export default Createpost
