import type { User, Product, Customer, FinancialAccount } from './types';

// Hashing function for demonstration.
const simpleHash = (password: string, salt: string) => `hashed_${password}_with_${salt}`;

const createInitialUsers = (): User[] => {
    // USE STATIC SALTS FOR PRE-DEFINED USERS
    const adminSalt = 'static_salt_for_admin_user_123';
    const cashierSalt = 'static_salt_for_cashier_user_456';
    return [
        { id: 'user-1', username: 'admin', passwordHash: simpleHash('albasha.123', adminSalt), salt: adminSalt, role: 'admin' },
        { id: 'user-2', username: 'cashier', passwordHash: simpleHash('123', cashierSalt), salt: cashierSalt, role: 'cashier' },
    ];
};

const createInitialProducts = (): Product[] => {
    return [
        { id: 'prod-1', name: 'شاورما دجاج (وجبة)', type: 'product', category: 'وجبات رئيسية', price: 90, costPrice: 45, description: 'وجبة شاورما دجاج مع بطاطس ومخلل' },
        { id: 'prod-2', name: 'مشويات مشكلة (كجم)', type: 'product', category: 'وجبات رئيسية', price: 420, costPrice: 250, description: 'كيلو مشويات مشكلة مع مقبلات' },
        { id: 'prod-3', name: 'كبة مقلية (حبة)', type: 'product', category: 'مقبلات', price: 15, costPrice: 7, description: 'حبة كبة مقلية مقرمشة' },
        { id: 'prod-4', name: 'أرز (طبق)', type: 'product', category: 'مقبلات', price: 25, costPrice: 10, description: 'طبق أرز بسمتي فاخر' },
        { id: 'prod-5', name: 'كنافة نابلسية', type: 'product', category: 'حلويات', price: 50, costPrice: 20, description: 'كنافة نابلسية أصلية بالجبن' },
        { id: 'prod-6', name: 'عصير برتقال فريش', type: 'product', category: 'مشروبات', price: 20, costPrice: 8, description: 'عصير برتقال طبيعي 100%' },
        { id: 'prod-7', name: 'بيبسي (علبة)', type: 'product', category: 'مشروبات', price: 15, costPrice: 6, description: 'علبة بيبسي باردة' },
        { id: 'prod-8', name: 'خدمة توصيل', type: 'service', category: 'خدمات', price: 20 },
    ];
};

const createInitialCustomers = (): Customer[] => {
    return [
        { id: 'cust-1', name: 'عميل نقدي', phone: '0000000000', address: '', email: '', notes: 'عميل افتراضي' },
    ];
};

const createInitialAccounts = (): FinancialAccount[] => {
    return [
        { id: 'cash-default', name: 'الخزينة الرئيسية', type: 'cash' },
        { id: 'bank-default', name: 'الحساب البنكي', type: 'bank' },
    ];
}


export const initialUsers = createInitialUsers();
export const initialProducts = createInitialProducts();
export const initialCustomers = createInitialCustomers();
export const initialAccounts = createInitialAccounts();
