const supabase = require('../config/supabaseClient');

const loanModel = {
    createLoan: async (data) => {
        return await supabase.from('loans').insert([data]).select();
    },
    
    getLoans: async (statusFilter) => {
        let query = supabase.from('loans').select('*');
        if (statusFilter) {
            query = query.eq('status', statusFilter);
        }
        return await query;
    },

    updateLoanStatus: async (id, status) => {
        return await supabase.from('loans').update({ status }).eq('id', id).select();
    },

    deleteLoan: async (id) => {
        return await supabase.from('loans').delete().eq('id', id);
    }
};

module.exports = loanModel;