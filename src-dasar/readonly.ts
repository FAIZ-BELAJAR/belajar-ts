// properties yang kita jadikan properties artinya tidak bisa diubah lagi setelah pertama kali dibuat

export interface Seller  {
    id: number;
    name: string;
    adress?: string;
    readonly nib: string;
    readonly npwp: string;
}