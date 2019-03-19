module.exports={
    prompts:{
        "lint": {
            "type": "confirm",
            "message": "是否用tslint"
        },
    },
    
    filters: {
        "tslint.json": "lint",
        "tsconfig.json": "lint"
    }
}