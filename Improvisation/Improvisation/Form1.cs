using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Drawing.Drawing2D;

namespace Improvisation
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void b_comp_Click(object sender, EventArgs e)
        {
            Type.Text = "Comparée";
            Type.Visible = true;
            b_comp.Visible = false;
            b_mixte.Visible = false;
        }

        private void b_mixte_Click(object sender, EventArgs e)
        {
            Type.Text = "Mixte";
            Type.Visible = true;
            b_comp.Visible = false;
            b_mixte.Visible = false;
        }

        private void Type_Click(object sender, EventArgs e)
        {
            Type.Visible = false;
            b_comp.Visible = true;
            b_mixte.Visible = true;
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }
    }
}
