type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[]
}

let filter: Filter = (array, f) => {
    return array.filter(f)
}

filter([1, 2, 3], _ => _ > 2)

filter(['a', 'b'], _ => _ !== 'b')

let names = [
    {firstName: 'paul'},
    {firstName: 'john'},
    {firstName: 'saman'}
]

filter(names, _ => _.firstName.startsWith('p'))


// binding the type to the type
type FilterWithBind<T> = {
    <T>(array: T[], f: (item: T) => boolean): T[]
}

let anotherFilter : FilterWithBind<number> = (array, f) => {
    return array.filter(f)
}

// bounded polymorphism

// TreeNode is an object with a single property, value
type TreeNode = {
    value: string
}
// The LeafNode type has all the properties TreeNode has, plus a property isLeaf that is always true
type LeafNode = TreeNode & { isLeaf: true }
// InnerNode also has all of TreeNode's properties , plus a children property that points to either one or two children
type InnerNode = TreeNode & { children: [TreeNode] | [TreeNode, TreeNode] }

let node: TreeNode = {value: 'a'}
let leafNode: LeafNode = {value: 'b', isLeaf: true}
let innerNodeL: InnerNode = {value: 'c', children: [b]}

/*function mapnode<T extends TreeNode> (
    node: T,
    f: (value: string) => string
): T {
    return {}
}*/