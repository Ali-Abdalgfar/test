// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button3")
                .setRotate(47)
                .setLeft("6.780952380952381em")
                .setTop("10.971428571428572em")
                .setWidth("18.666666666666668em")
                .setHeight("28.8em")
                .setCaption("Button")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "msg",
                        "args" : [
                            "fgbfgb",
                            "{}",
                            200,
                            5000
                        ],
                        "method" : "message",
                        "event" : 1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input22")
                .setLeft("22.095238095238095em")
                .setTop("30.476190476190474em")
                .setWidth("30.17142857142857em")
                .setHeight("10em")
                .setLabelSize("8em")
                .setLabelCaption("Text Area")
                .setMultiLines(true)
                .setValue("hgjgfv")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});