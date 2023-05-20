trigger AccountTrigger on Account (after insert, after update) {	
    if (Trigger.isAfter) {
        if (Trigger.isInsert) {
            AccountTriggerHandler.createDefaultCustomerContact(Trigger.new);
        }
        if (Trigger.isUpdate) {
            
        system.debug('condition checked-8');
            AccountTriggerHandler.updateAccount(Trigger.new);
        }
    }
}