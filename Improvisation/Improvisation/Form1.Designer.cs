namespace Improvisation
{
    partial class Form1
    {
        /// <summary>
        /// Variable nécessaire au concepteur.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Nettoyage des ressources utilisées.
        /// </summary>
        /// <param name="disposing">true si les ressources managées doivent être supprimées ; sinon, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Code généré par le Concepteur Windows Form

        /// <summary>
        /// Méthode requise pour la prise en charge du concepteur - ne modifiez pas
        /// le contenu de cette méthode avec l'éditeur de code.
        /// </summary>
        private void InitializeComponent()
        {
            this.Type = new System.Windows.Forms.Label();
            this.b_mixte = new System.Windows.Forms.Label();
            this.b_comp = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // Type
            // 
            this.Type.AutoSize = true;
            this.Type.Location = new System.Drawing.Point(535, 70);
            this.Type.Name = "Type";
            this.Type.Size = new System.Drawing.Size(31, 13);
            this.Type.TabIndex = 2;
            this.Type.Text = "Type";
            this.Type.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            this.Type.Visible = false;
            this.Type.Click += new System.EventHandler(this.Type_Click);
            // 
            // b_mixte
            // 
            this.b_mixte.AutoSize = true;
            this.b_mixte.Location = new System.Drawing.Point(493, 52);
            this.b_mixte.Name = "b_mixte";
            this.b_mixte.Size = new System.Drawing.Size(32, 13);
            this.b_mixte.TabIndex = 3;
            this.b_mixte.Text = "Mixte";
            this.b_mixte.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            this.b_mixte.Click += new System.EventHandler(this.b_mixte_Click);
            // 
            // b_comp
            // 
            this.b_comp.AutoSize = true;
            this.b_comp.Location = new System.Drawing.Point(582, 51);
            this.b_comp.Name = "b_comp";
            this.b_comp.Size = new System.Drawing.Size(55, 13);
            this.b_comp.TabIndex = 4;
            this.b_comp.Text = "Comparée";
            this.b_comp.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            this.b_comp.Click += new System.EventHandler(this.b_comp_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1051, 553);
            this.Controls.Add(this.b_comp);
            this.Controls.Add(this.b_mixte);
            this.Controls.Add(this.Type);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.Label Type;
        private System.Windows.Forms.Label b_mixte;
        private System.Windows.Forms.Label b_comp;
    }
}

