 import React, { Component, useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Thumbnail from '../../assets/casmm_logo.png'
import './Moderation.less';
import {getClassroom, getMentor } from '../../Utils/requests';

class ModerationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentData: [
                { id: 1, title: 'Content 1', description: 'This is the first content item', 
                reports: ["User 1 - Inappropriate content", "User 2 - Plagiarism", "User 3 - Hate speech", "User 4 - Inappropriate content", "User 5 - Plagiarism", "User 6 - Hate speech", "User 7 - Inappropriate content","User 8 - Inappropriate content", "User 9 - Plagiarism", "User 10 - Hate speech", "User 11 - Inappropriate content",  ], flags: 11},
                { id: 2, title: 'Content 2', description: 'This is the second content item', 
                reports: ["User 1 - Inappropriate content", "User 2 - Plagiarism", "User 3 - Hate speech", "User 4 - Inappropriate content", "User 5 - Plagiarism", "User 6 - Hate speech", "User 7 - Inappropriate content","User 8 - Inappropriate content", "User 9 - Plagiarism", "User 10 - Hate speech", "User 11 - Inappropriate content",  ], flags: 11},
                { id: 3, title: 'Content 3', description: 'This is the third content item', 
                reports: ["User 1 - Inappropriate content", "User 2 - Plagiarism", "User 3 - Hate speech", "User 4 - Inappropriate content", "User 5 - Plagiarism", "User 6 - Hate speech", "User 7 - Inappropriate content", ], flags: 7 },
                { id: 4, title: 'Content 4', description: 'Report Details',
                reports: ["User 1 - Inappropriate content", "User 2 - Plagiarism", "User 3 - Hate speech", "User 4 - Inappropriate content", "User 5 - Plagiarism", "User 6 - Hate speech", "User 7 - Inappropriate content", ], flags: 7 },
                { id: 5, title: 'Content 5', description: 'Report Details', 
                reports: ["User 1 - Inappropriate content", "User 2 - Plagiarism", "User 3 - Hate speech", "User 4 - Inappropriate content", "User 5 - Plagiarism", "User 6 - Hate speech", "User 7 - Inappropriate content", ], flags: 7 },
                { id: 6, title: 'Content 6', description: 'Report Details', 
                reports: ["User 1 - Inappropriate content", "User 2 - Plagiarism", "User 3 - Hate speech", "User 4 - Inappropriate content", "User 5 - Plagiarism", "User 6 - Hate speech", "User 7 - Inappropriate content", ], flags: 7 },
                { id: 7, title: 'Content 7', description: 'Report Details', 
                reports: ["User 1 - Inappropriate content", "User 2 - Plagiarism", "User 3 - Hate speech", "User 4 - Inappropriate content", "User 5 - Plagiarism", "User 6 - Hate speech", "User 7 - Inappropriate content", ], flags: 7 },
                { id: 8, title: 'Content 8', description: 'Report Details', 
                reports: ["User 1 - Inappropriate content", "User 2 - Plagiarism", "User 3 - Hate speech", "User 4 - Inappropriate content", "User 5 - Plagiarism", "User 6 - Hate speech", "User 7 - Inappropriate content", ], flags: 7 },
                { id: 9, title: 'Content 9', description: 'Report Details', 
                reports: ["User 1 - Inappropriate content", "User 2 - Plagiarism", "User 3 - Hate speech", "User 4 - Inappropriate content", "User 5 - Plagiarism", "User 6 - Hate speech", "User 7 - Inappropriate content", ], flags: 7 },
                { id: 10, title: 'Content 10', description: 'Report Details', 
                reports: ["User 1 - Inappropriate content", "User 2 - Plagiarism", "User 3 - Hate speech"], flags: 3 },
                { id: 11, title: 'Content 11', description: 'Report Details', 
                reports: ["User 1 - Inappropriate content", "User 2 - Plagiarism", "User 3 - Hate speech"], flags: 3 },
                { id: 12, title: 'Content 12', description: 'Report Details', 
                reports: ["User 1 - Inappropriate content", "User 2 - Plagiarism", "User 3 - Hate speech"], flags: 3 },
                { id: 13, title: 'Content 13', description: 'Report Details', 
                reports: ["User 1 - Inappropriate content", "User 2 - Plagiarism", "User 3 - Hate speech"], flags: 3 },
                { id: 14, title: 'Content 14', description: 'Report Details', 
                reports: ["User 1 - Inappropriate content", "User 2 - Plagiarism", "User 3 - Hate speech"], flags: 3 },
                { id: 15, title: 'Content 15', description: 'Report Details', 
                reports: ["User 1 - Inappropriate content", "User 2 - Plagiarism", "User 3 - Hate speech"], flags: 3 },
                
                
                // Add more content items here
            ],
            selectedContent: null,
        };
    }

    deselectContent()
    {
        this.setState({
            selectedContent: null,
        });
    }

    handleContentClick = (contentId) => {
        const selectedContent = this.state.contentData.find(content => content.id === contentId);
        this.setState({ selectedContent });
    }

    handleModerationAction = (action) => {
        // Perform your moderation action here, e.g., hide, delete, or approve content
        // Update the contentData and UI accordingly

        // Example: Removing the content from the list
        const updatedContentData = this.state.contentData.filter(content => content.id !== this.state.selectedContent.id);
        this.setState({
            contentData: updatedContentData,
            selectedContent: null,
        });
    }

    render() {
        const { contentData, selectedContent } = this.state;

        

        return (

            
            <div className='container nav-padding'>
                <NavBar />

                <div id='moderation-title'>Moderation Page</div> 
                <div id='moderation-wrapper'>
                    

                {/* Content List */}

                 

                
                <div class = "ContentBox">
                    
                <ol class = "ReportGrid">
                    {contentData.map(content => (

                       

                        <li key={content.id} onClick={() => this.handleContentClick(content.id)}>
                            <div class = "ItemBox">
                                

                                <div class = "ItemText">
                                {content.title}
                                </div>

                                <img src = {Thumbnail} class = "postThumbnail" alt ="Thumbnail" />
                        
                                <div class = "FlagDisplay">
                                {content.flags} Flags
                                </div>
                            
                            </div>
                        </li>

                    ))}
                </ol>             
            
            </div>

            </div>
        
            {selectedContent && (
                    <div>
                    <div class = "overlay" onClick={this.deselectContent}> </div>
                    <div class = "ReportBox">

                     <br></br>

                        <div>
                        <div class= "FlagDisplay2">{selectedContent.flags} Flags</div>
                        </div>

                        <p>Title: {selectedContent.title}</p>
                        <p>Description: {selectedContent.description}</p>

                            <div>
                            {selectedContent.reports.map(reportText => <p><div class = "reportsDisplay">{reportText}</div></p>)}
                            </div>

                        <button onClick={() => this.handleModerationAction('approve')} class = "approveButton" >Approve Post</button>
                        <button onClick={() => this.handleModerationAction('reject')} class = "rejectButton" >Reject Post</button>
                        

                    </div>
                    </div>
                )}

                <br></br>
                <br></br>

            </div>
            
        );
    }
}

export default ModerationPage;
