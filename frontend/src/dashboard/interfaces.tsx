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
  componentId?: number;

  description: string;
}

export interface Component {
  id: number;
  componentId?: number;
  name: string;
  description: string;
  tools: Tool[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  components: Component[];
}
