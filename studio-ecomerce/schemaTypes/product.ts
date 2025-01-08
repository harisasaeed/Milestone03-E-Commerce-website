
export default{
    name:'product',
    type:'document',
    title:'Product',
    fields:[
        {
            name:'name',
            type:'string',
            title:'Name of Product',
        },
        {
            name:'images',
            type:'array',
            title:'Product Images',
            of:[{type:'image'}],
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description of Product',
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price of Product',
            
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of Product',
            options:{
                source:'name',
            },
            
        },
        {
            name:'category',
            title:'Product Category',
            type:'reference',
            to:[
                {
                  type:'category',  
                }
            ]

            
        }

    ],
}