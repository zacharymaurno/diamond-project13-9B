 import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './Moderation.less';

class ModerationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentData: [
                { id: 1, title: 'Content 1', description: 'This is the first content item', flags: 10 },
                { id: 2, title: 'Content 2', description: 'This is the second content item', flags: 10 },
                { id: 3, title: 'Content 3', description: 'This is the third content item', flags: 10 },
                { id: 4, title: 'Content 4', description: 'Report Details', flags: 7 },
                { id: 5, title: 'Content 5', description: 'Report Details', flags: 7 },
                { id: 6, title: 'Content 6', description: 'Report Details', flags: 7 },
                { id: 7, title: 'Content 7', description: 'Report Details', flags: 5 },
                { id: 8, title: 'Content 8', description: 'Report Details', flags: 5 },
                { id: 9, title: 'Content 9', description: 'Report Details', flags: 5 },
                { id: 10, title: 'Content 10', description: 'Report Details', flags: 3 },
                { id: 11, title: 'Content 11', description: 'Report Details', flags: 3 },
                { id: 12, title: 'Content 12', description: 'Report Details', flags: 3 },
                
                
                // Add more content items here
            ],
            selectedContent: null,
        };
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
                    <div class = "overlay"> </div>
                    <div class = "ReportBox">

                        <h2>Content Details</h2>
                        <p>Title: {selectedContent.title}</p>
                        <p>Description: {selectedContent.description}</p>

                        <button onClick={() => this.handleModerationAction('approve')} class = "approveButton" >Approve</button>
                        <button onClick={() => this.handleModerationAction('reject')} class = "rejectButton" >Reject</button>

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
