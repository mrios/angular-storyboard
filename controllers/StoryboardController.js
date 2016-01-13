// angular-storyboard/controllers/StoryboardController.js

  mainApp
    
    .controller('StoryboardController', function($scope) {
      
      var storyboard = this;

      storyboard.currentStory = null;
      storyboard.editedStory = {};

      storyboard.stories = [
       {
        "assignee": "1",
        "criteria": "It tests!",
        "description": "This is a test",
        "id": "1",
        "reporter": "2",
        "status": "1",
        "title": "First Story",
        "type": "1"
      },
      {
        "assignee": "2",
        "criteria": "It works!",
        "description": "testing something",
        "id": "2",
        "reporter": "1",
        "status": "2",
        "title": "Second Story",
        "type": "2"
      },
      {
        "assignee": "3",
        "criteria": "It works!!!",
        "description": "Testing something",
        "id": "3",
        "reporter": "2",
        "status": "3",
        "title": "Third Story",
        "type": "3"
      }
    ];

      storyboard.statuses = [
        {id: "1", name: 'To Do'},
        {id: "2", name: 'In Progress'},
        {id: "3", name: 'Code Review'},
        {id: "4", name: 'QA Review'},
        {id: "5", name: 'Verified'}
      ];

      storyboard.users = [
        {id: "1", name: 'mrios'},
        {id: "2", name: 'johndoe'},
        {id: "3", name: 'mrrobot'}
      ];

      storyboard.types = [
        {id: "1", name: 'Spike'},
        {id: "2", name: 'Enhancement'},
        {id: "3", name: 'Security'}
      ];

      storyboard.setCurrentStory = function(story) {
        storyboard.currentStory = story;
        storyboard.editedStory = angular.copy(storyboard.currentStory);
      }

      storyboard.updateCancel = function() {
        storyboard.resetForm(); 
      }

      storyboard.updateStory = function() {
        var fields = ['title', 'description', 'criteria', 'status', 'type', 'reporter', 'assignee']

        fields.forEach(function(field) {
          storyboard.currentStory[field] = storyboard.editedStory[field];
        })

        storyboard.resetForm();
      }

      storyboard.resetForm = function() {
        storyboard.currentStory = null;
        storyboard.editedStory = {};

        storyboard.detailsForm = $setPristine();
        storyboard.detailsForm = $setUntouched();
      }

      storyboard.generateId = function() {
        return '_' + Math.random().toString(36).substr(2,9);
      }

      storyboard.createStory = function() {
        var newStory = angular.copy(storyboard.editedStory);
        newStory.id = storyboard.generateId();

        storyboard.stories.push(newStory);
        storyboard.resetForm();
      }

    });