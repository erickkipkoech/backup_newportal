// interfaces.ts

export interface Category {
  id: number;
  name: string;
  imageUrl: string;
  subCategories: string[];
}

// interfaces.ts

export interface Tool {
  id: number;
  name: string;
  subComponentId?: number;

  description: string;
}

export interface SubComponent{
  id:number;
  name:string;
  componentId?:number;
  description:string;
  tools:Tool[];

}

export interface Component {
  id: number;
  projectId?: number;
  name: string;
  description: string;
  subComponent: SubComponent[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  components: Component[];
}
