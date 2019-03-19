module.exports={
    prompts:{
        name: {
            type: 'string',
            required: true,
            message: 'Project name',
        },
        author: {
            type: 'string',
            message: 'Author',
        },
        description: {
            type: 'string',
            required: false,
            message: 'Project description',
            default: '构建一个lib',
        },
        lint: {
            "type": "confirm",
            "message": "是否用tslint"
        },
    },
    
    filters: {
        "tslint.json": "lint",
        "tsconfig.json": "lint"
    }
}