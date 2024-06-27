<div className={style.review}>
           
              <label>Review</label>
               {/* show list of reviews  */}
               <br/>
               <div>
               <label>Your Name</label>      
               <input
                type="text"
                value={currReviewerName}
                onChange={(e) => dispatch(movieActions.setReviewer(e.target.value))}
               /> 
               </div>
               <div>
                <label>Type your review</label>
                <textarea
                value={currReview}
                onChange={(e) => dispatch(movieActions.setReviewContent(e.target.value))}
               />
              </div>
              <button onClick={()=> dispatch(movieActions.setReview({reviewer:currReviewerName,content:currReview,}))}
                className={style.addreviewbtn}>Add review</button>

              <br/>

           </div>