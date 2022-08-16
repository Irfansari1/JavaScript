//receiving the target group object id
    //var targtGroupObjectId = await targetGroupService.getTargetGroupObjectID(targetGroupId, config.c4cUrl, config.c4cAuth, config.cookie, config.csrfToken);
    //getting the current member list of this target group
    var allMemberObjectIDs = ["1","2","3","4","5", "9"];

;
    var membersToBeDeleted = [];
    var membersToBeAdded = [];
    var memberList = ["4","5","6","7","8"];
    var updatedMemberList = memberList;
    //TODO implement logic to fill both arrays correctly
    //deleting all current members of the target group

    for (var objectID in allMemberObjectIDs) {
        var toBeDeleted = true;
        for (var newMemberObjectID in memberList)
        {
            if (memberList[newMemberObjectID] === allMemberObjectIDs[objectID])
            {
                
                memberList = memberList.filter(function(item) 
                {
                    return item !== memberList[newMemberObjectID]
                
                });
                toBeDeleted = false;
                break;
            }      
        }
        if (toBeDeleted === true)
        {
            membersToBeDeleted.push(allMemberObjectIDs[objectID]);
            //deleted = await targetGroupService.deleteTargetGroupMember(allMemberObjectIDs[objectID], config.c4cUrl, config.c4cAuth, config.cookie, config.csrfToken);
        
        }

    }

    for (var newMemberObjectID in memberList) {
        
            membersToBeAdded.push(memberList[newMemberObjectID]);
            //added = await targetGroupService.addTargetGroupMembers(targtGroupObjectId, memberList[newMemberObjectID], config.c4cUrl, config.c4cAuth, config.cookie, config.csrfToken);

    }


    console.log("Members deleted: " + membersToBeDeleted + " Added :" +membersToBeAdded + " Rest in the old list: " +allMemberObjectIDs+ " updated memberlist: " +updatedMemberList);