<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Sys extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

	public function __construct()
	{
		parent::__construct();
		$this->load->model('Model_sys');
		$this->logs = $this->session->all_userdata();
		$this->logged = $this->session->userdata('userLogged');
		$this->kategori = $this->session->userdata('kategori');
		$this->kotaKab = $this->session->userdata('kotaKab');
		$this->content = array(
			"base_url" => base_url(),
			"logs" => $this->session->all_userdata(),
		);
		
	}


	public function Dashboard()
	{
		if ( $this->logged && $this->kategori == 'admin' || $this->kategori == 'superAdmin') 
		{
			$this->twig->display('admin/index.html', $this->content);
		}else{
			redirect("logout");
		}
	}

	public function formUser()
	{
		if ( $this->logged && $this->kategori == 'superAdmin') 
		{

			$data = NULL;   
			$id = $this->input->get('id');
			$idx = $this->db->escape_str($id);        
            $KodeEdit = $idx;          
            if (!empty($KodeEdit)) {
                $q = $this->db->get_where("muser", array("id" => $KodeEdit));
                $data = $q->row();
            }   

            $this->content['kotaKab'] = $this->Model_sys->kotaKab();
            $this->content['data'] = $data;
			$this->twig->display('admin/user.html', $this->content);
		}else{
			redirect("Dashboard");
		}
	}

	public function listUser()
	{
		if ($this->logged && $this->kategori == 'superAdmin') {
			$this->twig->display('admin/listUser.html', $this->content);
		}else{
			redirect("logout");
		}
	}

	public function listDataUser()
	{	
		if ($this->logged && $this->kategori == 'superAdmin') 
		{
			$params = $columns = $totalRecords = $data = array();
			$params = $_REQUEST;
			$query = $this->Model_sys->get_datatables();
			$x = 0;
			$i=0;
			foreach ($query as $proses) {
				$x++;
				$row = array();
				$row[] = (!empty($proses->username) ? $proses->username : "NULL");
				$row[] = (!empty($proses->kategori) ? $proses->kategori : "NULL");
				$row[] = (!empty($proses->kotaKab) ? $proses->kotaKab : "NULL");

				// if ($this->kategori == 'superAdmin') {
					$row[] = '<a href="'.base_url().'formUser/?id='.$proses->id.'" class="btn btn-sm btn-info" title="Edit" id="Edit"><i class="fa fa-edit"></i> Edit </a> <a class="btn btn-sm btn-danger" href="javascript:void(0)" title="Hapus" onclick="deleteData('."'".$proses->id."'".')"><i class="fa fa-trash"></i> Delete</a> ';
				// }else{
				// 	$row[] = '<a href="javascript:void(0)" class="btn btn-sm btn-success" title="Hasil" onclick="view('."'".$proses->id."'".')" id="view"><i class="fa fa-eye"></i> View </a> <a class="btn btn-sm btn-danger" href="javascript:void(0)" title="Hapus" onclick="deleteData('."'".$proses->id."'".')"><i class="fa fa-trash"></i> Delete</a> ';
				// }
				

				
				//add html for action
				$data[] = $row;
			}

                $output = array(
    			                "draw" => $_POST['draw'],
                                "recordsTotal" => $this->Model_sys->count_all(),
                                "recordsFiltered" => $this->Model_sys->count_filtered(),
    	                         "data" => $data
    	                         );
			//output to json format
			echo json_encode($output);
		}else{
			redirect("Dashboard");
		}
		
		
	}

	public function saveUser()
	{
		$params = (object)$this->input->post();
		$data = $this->Model_sys->save($params);
		echo json_encode(array("status" => TRUE));

	}

	public function updateUser()
	{
		$params = (object)$this->input->post();
		$data = $this->Model_sys->update($params);
		echo json_encode(array("status" => TRUE));

	}

	public function deleteUser($id = NULL)
	{
		$this->Model_sys->delete($id);
		echo json_encode(array("status" => TRUE));
	}

	
}
